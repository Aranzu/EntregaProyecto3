from rest_framework import serializers

from blog.models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):

	username = serializers.SerializerMethodField('obtener_nombre_autor')

	class Meta:
		model = BlogPost
		fields = ['title', 'body', 'image', 'date_updated', 'username']

	def obtener_nombre_autor(self, blog_post):
		username = blog_post.author.username
		return username
