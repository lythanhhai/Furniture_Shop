# Generated by Django 4.0.4 on 2022-05-02 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.IntegerField(default=0, primary_key=True, serialize=False)),
                ('name_product', models.CharField(max_length=100)),
                ('price', models.FloatField()),
                ('desc', models.TextField()),
                ('url', models.ImageField(upload_to='')),
            ],
        ),
    ]
