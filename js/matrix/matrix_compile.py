#!/usr/bin/python2.4

import httplib, urllib, sys

# Define the parameters for the POST request and encode them in
# a URL-safe format.

params = urllib.urlencode([
    #('js_code', sys.argv[1]),
    ('code_url', 'https://raw.githubusercontent.com/kennytilton/MatrixJS/master/js/matrixjs/js/Matrix/Cells.js'),
    ('code_url', 'https://raw.githubusercontent.com/kennytilton/MatrixJS/master/js/matrixjs/js/Matrix/Model.js'),
    ('code_url', 'https://raw.githubusercontent.com/kennytilton/MatrixJS/master/js/matrixjs/js/mxWeb.js'),
    ('compilation_level', 'ADVANCED_OPTIMIZATIONS'),
    ('output_format', 'text'),
    ('output_info', 'warnings'),
  ])

# Always use the following value for the Content-type header.
headers = { "Content-type": "application/x-www-form-urlencoded" }
conn = httplib.HTTPConnection('closure-compiler.appspot.com')
conn.request('POST', '/compile', params, headers)
response = conn.getresponse()
data = response.read()
print data
conn.close()