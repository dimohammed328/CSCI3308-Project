import requests
import json

def test_songselect():
    print('Testing song select API for formatting and data')
    r = requests.get('https://lyricrace-backend.herokuapp.com/songselection/')
    pj = r.json()
    assert pj['command'] == 'SELECT'
    print('Query type correct')
    assert pj['rowCount'] > 0
    print('There is at least one song')
    assert 'title' in pj['rows'][0] and 'artist' in pj['rows'][0]
    print('Song data is structured correctly')
    print('All song select tests passed!')
    print('----------------------')

def test_get_post_responses():
    print('Testing to ensure all POST-only endpoints reject GET requests')
    r = requests.get('https://lyricrace-backend.herokuapp.com/')
    assert 'Cannot GET /' in r.text
    print('Route / passed successfully!')
    r = requests.get('https://lyricrace-backend.herokuapp.com/login')
    assert 'Cannot GET /' in r.text
    print('Route /login passed successfully!')
    r = requests.get('https://lyricrace-backend.herokuapp.com/register')
    assert 'Cannot GET /' in r.text
    print('Route /register passed successfully!')
    print('----------------------')

def test_auth():
    print('Testing authentication for proper behavior')
    print('Testing with registered user "jax" with password "123"')
    r = requests.post('https://lyricrace-backend.herokuapp.com/login', data = {'username':'jax', 'password': '123'})
    assert r.json()['message'] == 'Successfully Logged In'
    print('Test passed for registered user!')
    print('Testing with unregistered user "nonexistent" with password "badpassword"')
    r = requests.post('https://lyricrace-backend.herokuapp.com/login', data = {'username':'nonexistent', 'password': 'badpassword'})
    assert r.json()['message'] == 'User Not Found'
    print('Test passed for unregistered user!')
    print('Testing for incorrect password on registerd user "jax" with password "456"')
    r = requests.post('https://lyricrace-backend.herokuapp.com/login', data = {'username':'jax', 'password': '456'})
    assert r.json()['message'] == 'Password Incorrect'
    print('Test passed for incorrect password')
    print('----------------------')



if __name__ == '__main__':
    test_songselect()
    test_get_post_responses()
    test_auth()
    print('All tests passed!')