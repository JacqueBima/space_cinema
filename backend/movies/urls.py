from django.urls import path
from .views import (
    MovieListView,
    MovieDetailView,
    CinemaListView,
    ShowtimeListView,
    available_seats,
    BookingCreateView,
    BookingListView,
    RegisterView,
    LoginView,
)

urlpatterns = [
    path("movies/", MovieListView.as_view()),
    path("movies/<int:pk>/", MovieDetailView.as_view()),
    path("cinemas/", CinemaListView.as_view()),
    path("showtimes/", ShowtimeListView.as_view()),
    path('showtimes/<int:showtime_id>/seats/', available_seats, name='available-seats'),
    path("booking/", BookingCreateView.as_view()),
    path("my-bookings/", BookingListView.as_view()),
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view()),
]