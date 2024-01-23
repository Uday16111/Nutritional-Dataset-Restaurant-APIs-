import json
import uuid

def assign_unique_ids(json_data):
    for element in json_data:
        element['ID'] = str(uuid.uuid4())
    return json_data

# Read the JSON file
with open('data\data2.json', 'r') as file:
    data = json.load(file)

# Assign UUIDs as unique IDs to each element
data_with_ids = assign_unique_ids(data)

# Write the updated JSON data back to the file
with open('data\data2.json', 'w') as file:
    json.dump(data_with_ids, file, indent=2)
