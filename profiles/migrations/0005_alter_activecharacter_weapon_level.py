# Generated by Django 3.2.4 on 2021-07-14 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_auto_20210714_0954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activecharacter',
            name='weapon_level',
            field=models.IntegerField(default=1),
        ),
    ]
