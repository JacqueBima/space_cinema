from django.contrib import admin
from .models import Film, Genre, Cinema, Showtime, Booking, UserHistory, Rating, Comment, Favorite
from .models import User

# Модели без кастомного админ-интерфейса
admin.site.register(Booking)
admin.site.register(UserHistory)
admin.site.register(Rating)
admin.site.register(Comment)
admin.site.register(Favorite)

# Модели с кастомным админ-интерфейсом
@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Cinema)
class CinemaAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'halls', 'total_seats', 'vip_seats')
    search_fields = ('name', 'location')

@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('title', 'original_title', 'year', 'type')
    list_filter = ('type', 'genres')
    search_fields = ('title', 'original_title', 'director')
    filter_horizontal = ('genres',)

@admin.register(Showtime)
class ShowtimeAdmin(admin.ModelAdmin):
    list_display = ('film', 'cinema', 'time', 'price', 'vip_price')
    list_filter = ('cinema', 'film')
