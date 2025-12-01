from rest_framework import serializers
from .models import Movie, Cinema, Showtime, Booking
from django.contrib.auth.models import User

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class CinemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cinema
        fields = '__all__'

class ShowtimeSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    cinema = CinemaSerializer(read_only=True)

    class Meta:
        model = Showtime
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    showtime = ShowtimeSerializer(read_only=True)

    class Meta:
        model = Booking
        fields = '__all__'

class BookingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['showtime', 'seat_number']

    def validate(self, data):
        showtime = data['showtime']
        seat_number = data['seat_number']
        if Booking.objects.filter(showtime=showtime, seat_number=seat_number).exists():
            raise serializers.ValidationError(f"Seat {seat_number} is already booked for this showtime.")
        return data

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
