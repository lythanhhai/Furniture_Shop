# Generated by Django 4.0.4 on 2022-06-05 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sale', '0008_remove_customer_id_address_customer_address_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='key_per',
            field=models.IntegerField(default=0),
        ),
    ]
