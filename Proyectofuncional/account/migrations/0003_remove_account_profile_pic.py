# Generated by Django 3.1.2 on 2020-12-04 23:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_account_profile_pic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='profile_pic',
        ),
    ]
