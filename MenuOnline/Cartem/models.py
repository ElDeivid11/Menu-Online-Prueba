from django.db import models


class usuario(models.Model):
    correo = models.CharField(primary_key=True, max_length=30)
    nombre= models.CharField(max_length=20)
    contraseña = models.CharField(max_length=20)
    def __str__(self):
        return str(self.correo)+str(self.contraseña)