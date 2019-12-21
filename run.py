from templates import app

if __name__ == '__main__':
    app.config.from_object('configurations.ProductionConfig')
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)