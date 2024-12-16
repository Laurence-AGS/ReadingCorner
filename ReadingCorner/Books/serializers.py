from rest_framework import serializers

class BookSerializer(serializers.Serializer):
    Author = serializers.CharField()
    Language = serializers.CharField()
    ISBN = serializers.CharField()
    description = serializers.CharField()
    BookName = serializers.CharField()
    BookId = serializers.IntegerField()
    category = serializers.CharField()
    Publisher = serializers.CharField()
    PublishingNumber = serializers.IntegerField()
    PublishingYear = serializers.IntegerField()
