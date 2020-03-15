from django.db import models

class Userfeedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.FloatField()
    feedback = models.TextField(max_length=300)

