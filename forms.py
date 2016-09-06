from django import forms
from django.utils.translation import ugettext_lazy as _
from .models import User
from .models import Course

class ProfileForm(forms.ModelForm):

	password = forms.CharField(label=_('Password'), widget=forms.PasswordInput)

	def save(self, commit=True):
		super(ProfileForm, self).save(commit=False)

		self.instance.set_password(self.cleaned_data['password'])
		self.instance.save()

		return self.instance

	class Meta:
		model = User
		fields = ['username', 'name', 'email', 'password', 'birth_date', 'city', 'state', 'gender', 'cpf', 'phone', 'image']

class UserForm(forms.ModelForm):

	class Meta:
		model = User
		fields = ['username', 'name', 'email', 'birth_date', 'city', 'state', 'gender', 'type_profile', 'cpf', 'phone', 'image', 'is_staff', 'is_active']
		
		
class SubjectForm(forms.Form):
    presentation = forms.CharField(max_length=100)
    topic = forms.CharField(widget=forms.Textarea)