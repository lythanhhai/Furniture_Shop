# Generated by Django 4.0.5 on 2022-06-06 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sale', '0010_alter_customer_key_per'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='key_per',
            field=models.IntegerField(default=0),
        ),
    ]
