from django.db import models
from django.contrib.auth.models import User

class Announcement(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    year_course = models.CharField(max_length=100)
    id_number = models.CharField(max_length=20)
    phone = models.CharField(max_length=15)
    
    # Academic & Technical
    department = models.CharField(max_length=100)
    subjects_taken = models.TextField()
    skills = models.TextField()
    support_areas = models.TextField()

    # Helpdesk
    tickets_raised = models.IntegerField(default=0)
    ongoing_requests = models.CharField(max_length=200)
    support_hours = models.CharField(max_length=100)

    # Additional
    languages = models.CharField(max_length=200, blank=True, null=True, default='')
    availability = models.CharField(max_length=100, blank=True, null=True, default='')
    interests = models.TextField(blank=True, null=True, default='')

    def __str__(self):
         return self.user.get_full_name()