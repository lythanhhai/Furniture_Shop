# Generated by Django 4.0.4 on 2022-06-19 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sale', '0014_alter_orders_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='datetime',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
