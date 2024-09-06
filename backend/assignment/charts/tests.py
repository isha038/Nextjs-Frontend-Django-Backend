# In your Django app's tests.py file
from django.test import TestCase

class APITest(TestCase):
    def test_candlestick_data(self):
        # Send a GET request to the '/api/candlestick-data/' endpoint
        response = self.client.get('/api/candlestick-data/')
        
        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)
        
        # Assert that the 'data' key is present in the JSON response
        self.assertIn('data', response.json())

    def test_line_chart_data(self):
        # Send a GET request to the '/api/line-chart-data/' endpoint
        response = self.client.get('/api/line-chart-data/')
        
        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)
        
        # Assert that the 'labels' and 'data' keys are present in the JSON response
        json_response = response.json()
        self.assertIn('labels', json_response)
        self.assertIn('data', json_response)

    def test_bar_chart_data(self):
        # Send a GET request to the '/api/bar-chart-data/' endpoint
        response = self.client.get('/api/bar-chart-data/')
        
        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)
        
        # Assert that the 'labels' and 'data' keys are present in the JSON response
        json_response = response.json()
        self.assertIn('labels', json_response)
        self.assertIn('data', json_response)

    def test_pie_chart_data(self):
        # Send a GET request to the '/api/pie-chart-data/' endpoint
        response = self.client.get('/api/pie-chart-data/')
        
        # Assert that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)
        
        # Assert that the 'labels' and 'data' keys are present in the JSON response
        json_response = response.json()
        self.assertIn('labels', json_response)
        self.assertIn('data', json_response)

