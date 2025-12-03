from django.db import models
from django.contrib.auth.models import User

# Фильм
class Movie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    duration = models.IntegerField(help_text="Длительность в минутах")
    release_date = models.DateField()
    poster = models.ImageField(upload_to='posters/', blank=True, null=True)

    def __str__(self):
        return self.title


# Кинотеатр / Зал
class Cinema(models.Model):
    name = models.CharField(max_length=100)
    total_seats = models.IntegerField()
    vip_seats = models.IntegerField(default=0) # new field

    def __str__(self):
        return self.name


# Сеанс
class Showtime(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='showtimes')
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE, related_name='showtimes')
    start_time = models.DateTimeField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    vip_price = models.DecimalField(max_digits=6, decimal_places=2, default=0)  # VIP seat price

    def __str__(self):
        return f"{self.movie.title} at {self.start_time}"



# Бронирование
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    showtime = models.ForeignKey(Showtime, on_delete=models.CASCADE)
    seat_number = models.PositiveIntegerField()
    is_vip = models.BooleanField(default=False)  # new
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('showtime', 'seat_number')  # одно место на один сеанс

    def __str__(self):
        return f"{self.user.username} - {self.showtime.movie.title} - Seat {self.seat_number}"


# Платежи
class Payment(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE, related_name='payment')
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    status = models.CharField(max_length=50, choices=[('pending', 'Pending'), ('completed', 'Completed')])
    paid_at = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f"{self.booking} - {self.status}"
