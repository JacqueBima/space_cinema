from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Movie, Cinema, Showtime, Booking
from .serializers import MovieSerializer, CinemaSerializer, ShowtimeSerializer, BookingSerializer, BookingCreateSerializer, UserSerializer

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
    total_seats = showtime.cinema.total_seats
    booked_seats = Booking.objects.filter(showtime=showtime).values_list('seat_number', flat=True)
    free_seats = [seat for seat in range(1, total_seats + 1) if seat not in booked_seats]
    return Response({'free_seats': free_seats})

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
@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=400)
    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({"message": "User created successfully"})

# Вход
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        return Response({"message": "Login successful", "user_id": user.id})
    return Response({"error": "Invalid credentials"}, status=400)
