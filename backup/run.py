from templates import app

if __name__ == '__main__':
    app.config.from_object('configurations.DevelopmentConfig')
    app.run()