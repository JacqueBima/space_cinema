from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Пользователь
class User(AbstractUser):
    date_joined = models.DateTimeField(auto_now_add=True)

    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions_set',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

# Жанры
class Genre(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

# Кинотеатры
class Cinema(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    halls = models.IntegerField(default=1)
    total_seats = models.IntegerField(default=100)
    vip_seats = models.IntegerField(default=10)

    def __str__(self):
        return self.name

# Фильмы
class Film(models.Model):
    TYPE_CHOICES = [
        ('now', 'Now'),
        ('soon', 'Soon')
    ]

    title = models.CharField(max_length=255)
    original_title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    year = models.IntegerField()
    duration = models.CharField(max_length=50, blank=True, null=True)
    average_rating = models.FloatField(default=0.0)
    poster_url = models.TextField(blank=True, null=True)
    video_url = models.TextField(blank=True, null=True)
    badge = models.CharField(max_length=50, blank=True, null=True)
    director = models.CharField(max_length=255, blank=True, null=True)
    cast = models.JSONField(blank=True, null=True)
    price = models.IntegerField(default=0)
    age_rating = models.PositiveIntegerField(default=0)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES, default='now')
    genres = models.ManyToManyField(Genre, related_name='films')

    def __str__(self):
        return self.title

# Сеансы
class Showtime(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='showtimes')
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE, related_name='showtimes')
    time = models.CharField(max_length=10)
    price = models.IntegerField(default=0)
    vip_price = models.IntegerField(default=0)

# Бронирование
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    showtime = models.ForeignKey(Showtime, on_delete=models.CASCADE, related_name='bookings')
    seat_number = models.IntegerField()
    is_vip = models.BooleanField(default=False)

# История просмотров
class UserHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    watched_at = models.DateTimeField(auto_now_add=True)

# Оценки
class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    score = models.IntegerField()  # 1-5

# Комментарии
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

# Любимые фильмы
class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
