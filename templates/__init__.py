from flask import Flask

app = Flask(__name__,
    static_folder = './public',
    template_folder = './static')

from templates.music_app.views import music_app_blueprint

app.register_blueprint(music_app_blueprint)