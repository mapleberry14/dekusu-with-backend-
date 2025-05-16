# forms.py
from django import forms

class LoginForm(forms.Form):
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'placeholder': 'ignatius@gbox.adnu.edu.ph'}))
    password = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={'placeholder': 'password'}))
    def clean_email(self):
        email = self.cleaned_data['email']
        if not email.endswith('@gbox.adnu.edu.ph'):
            raise forms.ValidationError("Only @gbox.adnu.edu.ph email addresses are allowed.")
        return email
