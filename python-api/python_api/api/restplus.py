import logging
import traceback

from flask_restplus import Api
from python_api import settings

log = logging.getLogger(__name__)

api = Api(version='1.0', title='Python API',
          description='A simple demonstration of a Flask RestPlus powered API')


@api.errorhandler
def default_error_handler(e):
    message = 'An unhandled exception occurred.'
    log.exception(message)

    if not settings.FLASK_DEBUG:
        return {'message': message}, 500

