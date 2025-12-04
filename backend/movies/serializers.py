from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User
from .models import Film, Genre, Cinema, Showtime, Booking

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class FilmSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True, read_only=True)

    class Meta:
        model = Film
        fields = '__all__'

class CinemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cinema
        fields = '__all__'

class ShowtimeSerializer(serializers.ModelSerializer):
    film = FilmSerializer(read_only=True)
    cinema = CinemaSerializer(read_only=True)

    class Meta:
        model = Showtime
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class BookingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('showtime', 'seat_number', 'is_vip')

    def validate(self, data):
        showtime = data['showtime']
        seat_number = data['seat_number']
        if Booking.objects.filter(showtime=showtime, seat_number=seat_number).exists():
            raise serializers.ValidationError(f"Seat {seat_number} is already booked.")
        return data

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        validated_data.pop('password2')
        return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError("Invalid username or password")
        return user
