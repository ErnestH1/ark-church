
from mega import Mega

# Create an instance of the Mega class
mega = Mega()

# Define your MEGA account credentials
email = "arkyouth065@gmail.com"
password = "Arkyouth1212"

# Login to your MEGA account
m = mega.login(email, password)

# Use the instance to perform operations
quota = m.get_quota()
print("Total Space: ", quota)
