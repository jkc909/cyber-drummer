class BaseConfig(object):
    """
    Base config class
    """
    DEBUG = True
    Testing = False

class ProductionConfig(BaseConfig):
    """
    Production specific config
    """
    DEBUG = False

class DevelopmentConfig(BaseConfig):
    """
    Development environment specific configuration
    """
    Debug = True
    Testing = False

    