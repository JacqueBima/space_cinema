from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Movie, Cinema, Showtime, Booking
from .serializers import MovieSerializer, CinemaSerializer, ShowtimeSerializer, BookingSerializer, BookingCreateSerializer, UserSerializer
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework.views import APIView
from rest_framework import status
# Фильмы
class MovieListView(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetailView(generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

# Кинотеатры
class CinemaListView(generics.ListAPIView):
    queryset = Cinema.objects.all()
    serializer_class = CinemaSerializer

# Сеансы
class ShowtimeListView(generics.ListAPIView):
    queryset = Showtime.objects.all()
    serializer_class = ShowtimeSerializer

# Свободные места
@api_view(['GET'])
def available_seats(request, showtime_id):
    showtime = Showtime.objects.get(id=showtime_id)
    total_normal = showtime.cinema.total_seats
    total_vip = showtime.cinema.vip_seats

    booked = Booking.objects.filter(showtime=showtime)
    booked_normal = booked.filter(is_vip=False).values_list('seat_number', flat=True)
    booked_vip = booked.filter(is_vip=True).values_list('seat_number', flat=True)

    free_normal = [seat for seat in range(1, total_normal + 1) if seat not in booked_normal]
    free_vip = [seat for seat in range(1, total_vip + 1) if seat not in booked_vip]

    return Response({
        'free_normal_seats': free_normal,
        'free_vip_seats': free_vip
    })


# Бронирование
class BookingCreateView(generics.CreateAPIView):
    serializer_class = BookingCreateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# Список своих броней
class BookingListView(generics.ListAPIView):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)

# Регистрация
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

# Логин
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        return Response({
            "id": user.id,
            "username": user.username,  
            "email": user.email
        })