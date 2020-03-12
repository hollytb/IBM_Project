import requests
import json

x = json.load(open('sample-request.json', 'rt'))
headers = {'Content-Type': 'application/json'}


r = requests.post('http://theia.eu-gb.mybluemix.net/classify',
                  data=json.dumps(x), headers=headers)
'''
if r.status_code == 200:
    print(r.json())
else:
    print(r.text)
'''
JsonDictionary = {}
for i, d in enumerate(x):
    JsonDictionary[f"dict{i}"] = d
print(JsonDictionary.keys())
