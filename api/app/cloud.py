import dropbox


# Dropbox access token
access_token = 'YOUR_ACCESS_TOKEN'

# Create a Dropbox client
client = dropbox.Dropbox(access_token)

# Function to upload a file to Dropbox
def upload_file(file_path, destination_path):
    with open(file_path, 'rb') as file:
        response = client.files_upload(file.read(), destination_path)
        print(f"Uploaded {file_path} to Dropbox as {response.name}")

# Function to download a file from Dropbox
def download_file(dropbox_path, local_path):
    response = client.files_download_to_file(local_path, dropbox_path)
    print(f"Downloaded {dropbox_path} from Dropbox to {local_path}")

# Example usage:
# upload_file('local_file.txt', '/Dropbox/Folder/file.txt')
# download_file('/Dropbox/Folder/file.txt', 'local_file.txt')
