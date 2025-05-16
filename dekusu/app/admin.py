from django.contrib import admin
from .models import Announcement,  UserProfile


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_posted')
    search_fields = ('title', 'content')
    ordering = ('-date_posted',)

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'id_number', 'year_course', 'department', 'tickets_raised')
    search_fields = ('user__username', 'id_number', 'phone')
    ordering = ('user',)