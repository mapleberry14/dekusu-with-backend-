from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_view, name='index'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('dashboard-guest/', views.dashboard_guest, name='dashboard_guest'),
    path('map/', views.map_view, name='map'),
    path('map-guest/', views.map_guest, name='map_guest'),
    path('profile/', views.profile, name='profile'),
    path('notification/', views.notifications, name='notifications'),
    path('notification-guest/', views.notifications_guest, name='notifications_guest'),
    path('logout/', views.logout_view, name='logout')
]