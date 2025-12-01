from django.urls import path
from .views import (
    MovieListView, MovieDetailView, CinemaListView, ShowtimeListView,
    BookingCreateView, BookingListView, available_seats, register, login
)

urlpatterns = [
    path('movies/', MovieListView.as_view(), name='movie-list'),
    path('movies/<int:pk>/', MovieDetailView.as_view(), name='movie-detail'),
    path('cinemas/', CinemaListView.as_view(), name='cinema-list'),
    path('showtimes/', ShowtimeListView.as_view(), name='showtime-list'),
    path('showtimes/<int:showtime_id>/seats/', available_seats, name='available-seats'),
    path('bookings/', BookingListView.as_view(), name='booking-list'),
    path('bookings/create/', BookingCreateView.as_view(), name='booking-create'),
    path('auth/register/', register, name='register'),
    path('auth/login/', login, name='login'),
]
