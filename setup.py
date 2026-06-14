#!/usr/bin/env python

import re
import sys
from os import path
from setuptools import setup, find_packages


requirements = [
    'aniso8601>=0.82',
    'Flask>=0.8',
    'six>=1.3.0',
    'pytz',
]


version_file = path.join(
    path.dirname(__file__),
    'flask_nexusx',
    '__version__.py'
)
with open(version_file, 'r') as fp:
    m = re.search(
        r"^__version__ = ['\"]([^'\"]*)['\"]",
        fp.read(),
        re.M
    )
    version = m.groups(1)[0]


setup(
    name='NexusX',
    version=version,
    license='Apache-2.0',
    url='https://github.com/alokpriyadarshi618/NexusX/',
    project_urls={
        'Source': 'https://github.com/alokpriyadarshi618/NexusX',
    },
    author='Alok Priyadarshi',
    author_email='alokpriyadarshi618@gmail.com',
    description='Simple framework for creating REST APIs',
    packages=find_packages(exclude=['tests']),
    classifiers=[
        'Framework :: Flask',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
    ],
    zip_safe=False,
    include_package_data=True,
    platforms='any',
    install_requires=requirements,
)
