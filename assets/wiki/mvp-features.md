MVP Features are the essential features that contribute toward a viable version of Shipcamp.

- [User Authentication](#user-authentication)
  - [Features](#features)
- [Spots](#spots)
  - [Features](#features-1)
  - [Actions](#actions)
- [Bookings](#bookings)
  - [Features](#features-2)
  - [Actions](#actions-1)
- [Spots Search](#spots-search)
  - [Features](#features-3)
- [Reviews](#reviews)
  - [Features](#features-4)
  - [Actions](#actions-2)

## User Authentication
Shipcamp has sophisticated user authentication that includes login, signup, user session, and logout funtionality.

### Features
- A **logged-out user** may:
  - sign up for a new account
  - log in to an existing account
- A **logged-in user** may:
  - log out of their account
  - stay logged in until their session expires or they log out

## Spots
Spots are ships that are available for users to camp on/at. Ships can be spaceships, boats, or anything else that could plausibly be called a "ship". If you think it's a ship, you can probably camp on it!

### Features
- View spots:
  - photos
  - pricing
  - booking form
  - a discription
  - host information
  - additional details
    - campsite area
    - essentials
    - amenities
  - reviews

### Actions
- A **logged-out user** may:
  - view spots
  - view spot details
  - view available dates
- A **logged-in user** may:
  - perform all the same actions as a **logged-out user**
  - navigate to a booking page from a spot page
  - write a review

## Bookings
A booking is a way to reserve a spot for a period of time.

### Features
- create a new booking through a "checkout" process
  - select additional options
  - pay for bookings
- view existing bookings
- modify existing bookings
- delete existing bookings

### Actions
- A **logged-out user** does not have access to the booking feature and may only initiate the booking process before being prompted to log in.
- A **logged-in user** may:
  - review reservation details
  - select additional purchases
  - enter payment details
  - confirm reservation
  - view existing bookings
  - modify existing bookings
  - delete existing bookings

## Spots Search
It is essential for a user to be able to search for and find the perfect spot. Any user may search for spots, whether logged in or not. Users may search by name, location, date, and accomodation.

### Features
- search by:
  - name
  - dates available
  - accomodations
- view and select spots after searching

## Reviews
A review is a way for someone to give their thoughts about a recent booking. Writing reviews are limited to **logged-in users**. A user must have stayed at a spot in order to review it. **Logged-out users** may view reviews only.

### Features
- reading reviews
- creating reviews
- updating reviews
- deleting reviews

### Actions
- A **logged-out user** may:
  - view reviews
- A **logged-in user** may:
  - write reviews
  - rate a spot on a scale of 1 - 5 stars
  - delete reviews they have written

<!--

## **Bonus**: Messaging
## **Bonus**: User/host profiles
## **Bonus**: Site features
  - offers
  - activities
  - terrain
  - vibe
  - policies
  - location

-->
