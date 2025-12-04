from django.urls import path
from .views import (
    FilmListView, FilmDetailView,
    GenreListView, CinemaListView, ShowtimeListView,
    BookingCreateView, BookingListView, available_seats,
    RegisterView, LoginView
)
from .models import User

urlpatterns = [
    path('films/', FilmListView.as_view()),
    path('films/<int:pk>/', FilmDetailView.as_view()),
    path('genres/', GenreListView.as_view()),
    path('cinemas/', CinemaListView.as_view()),
    path('showtimes/', ShowtimeListView.as_view()),
    path('booking/', BookingCreateView.as_view()),
    path('my-bookings/', BookingListView.as_view()),
    path('showtimes/<int:showtime_id>/seats/', available_seats),
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
]
