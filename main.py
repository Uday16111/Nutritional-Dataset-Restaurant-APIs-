import requests
import pandas as pd

url = "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition"

headers = {
    "X-RapidAPI-Key": "367b0dd40fmsh8944b995f0fee88p102a48jsnf628f862d9c4",
    "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com"
}

# Read queries from the external file
with open('data\queries.txt', 'r') as file:
    queries = [line.strip() for line in file.readlines()]

# Create an empty DataFrame to store the results
results = []

# Loop through each query and make a request
for query in queries:
    querystring = {
        "query": query
    }
    response = requests.get(url, headers=headers, params=querystring)
    api_data = response.json()

    # Append the API data to the results list
    results.append(api_data)

# Create a DataFrame from the combined results
combined_df = pd.concat([pd.DataFrame(result) for result in results], ignore_index=True)

# Save the DataFrame to a CSV file
combined_df.to_csv("data\api_nutrition_data_combined.csv", index=False)

# Print a confirmation message
print("API data saved to 'api_nutrition_data_combined.csv'")
