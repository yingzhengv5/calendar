# calendar app

Link: https://calendar-ying.vercel.app/

This is a Vite calendar app integrated with the Unsplash Image API to fetch HD pet images for display.

## Run the App

### Step 1: Unsplash API Credential

To run the app on your local machine, you will first need an Unsplash API credential. Go to the
Unsplash Developers page and create a new application. Save the Access Key.

### Step 2: Create .env File

Create a .env file in the calendar folder (calendar/.env) and paste the following content into the file. <br/>
Replace Your Unsplash Access Key with the access key from step 1.

```
VITE_API_KEY = Your Unsplash Access Key
```

### Step 3: Run the Application

```
$ cd calendar
$ npm install
$ npm run dev
```

Now you should be able to enjoy the calendar at http://localhost:5173.
