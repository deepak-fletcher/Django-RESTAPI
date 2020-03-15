from rest_framework import serializers
from feedback.models import Userfeedback


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userfeedback
        fields = '__all__'