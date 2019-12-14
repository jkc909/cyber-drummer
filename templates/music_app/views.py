from flask import render_template, Blueprint

music_app_blueprint = Blueprint('music_app', __name__)

@music_app_blueprint.route('/')
@music_app_blueprint.route('/music_app')

def index():
    return render_template('index.html')