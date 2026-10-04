import urllib.request
import urllib.error
import json

BASE_URL = "http://127.0.0.1:8000"

edible_sample = {
    "cap-shape": "x",
    "cap-surface": "s",
    "cap-color": "n",
    "bruises": "t",
    "odor": "a",
    "gill-attachment": "f",
    "gill-spacing": "c",
    "gill-size": "b",
    "gill-color": "k",
    "stalk-shape": "e",
    "stalk-root": "b",
    "stalk-surface-above-ring": "s",
    "stalk-surface-below-ring": "s",
    "stalk-color-above-ring": "w",
    "stalk-color-below-ring": "w",
    "veil-type": "p",
    "veil-color": "w",
    "ring-number": "o",
    "ring-type": "p",
    "spore-print-color": "n",
    "population": "s",
    "habitat": "g"
}

poisonous_sample = {
    "cap-shape": "f",
    "cap-surface": "y",
    "cap-color": "e",
    "bruises": "f",
    "odor": "f",
    "gill-attachment": "f",
    "gill-spacing": "c",
    "gill-size": "n",
    "gill-color": "b",
    "stalk-shape": "e",
    "stalk-root": "b",
    "stalk-surface-above-ring": "k",
    "stalk-surface-below-ring": "k",
    "stalk-color-above-ring": "w",
    "stalk-color-below-ring": "w",
    "veil-type": "p",
    "veil-color": "w",
    "ring-number": "o",
    "ring-type": "e",
    "spore-print-color": "w",
    "population": "v",
    "habitat": "d"
}

invalid_sample = dict(edible_sample)
invalid_sample["cap-shape"] = "invalid_category"

def make_request(url, data_dict):
    req = urllib.request.Request(
        url,
        data=json.dumps(data_dict).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    try:
        with urllib.request.urlopen(req) as response:
            return response.status, json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode('utf-8'))

def test_predictions():
    print("--- Testing Edible Sample ---")
    status1, res1 = make_request(f"{BASE_URL}/api/predict", edible_sample)
    print("Status:", status1)
    print("Response:", json.dumps(res1, indent=2))
    
    print("\n--- Testing Poisonous Sample ---")
    status2, res2 = make_request(f"{BASE_URL}/api/predict", poisonous_sample)
    print("Status:", status2)
    print("Response:", json.dumps(res2, indent=2))

    print("\n--- Testing Invalid Input Validation (HTTP 400) ---")
    status3, res3 = make_request(f"{BASE_URL}/api/predict", invalid_sample)
    print("Status:", status3)
    print("Response:", json.dumps(res3, indent=2))

if __name__ == "__main__":
    test_predictions()
