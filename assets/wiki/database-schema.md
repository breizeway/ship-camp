- [`Users`](#users)
- [`ShelterTypes`](#sheltertypes)
- [`CancellationPolicies`](#cancellationpolicies)
- [`ArrivalTypes`](#arrivaltypes)
- [`AccessTypes`](#accesstypes)
- [`Amenities`](#amenities)
- [`Spots`](#spots)
- [`SpotAmenities`](#spotamenities)
- [`Photos`](#photos)
- [`Bookings`](#bookings)
- [`Reviews`](#reviews)

## `Users`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| username | varchar(30) | not null, unique |
| email | varchar(256) | not null, unique |
| hashedPassword | bytea | not null |
| firstName | varchar(64) | not null |
| lastName | varchar(64) | not null |
| profileImageUrl | varchar(256) |  |
| isHost | boolean | not null |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `ShelterTypes`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| description | varchar(64) | not null |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `CancellationPolicies`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| description | varchar(64) | not null |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `ArrivalTypes`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| description | varchar(64) | not null |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `AccessTypes`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| description | varchar(64) | not null |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `Amenities`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| description | varchar(64) | not null |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `Spots`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| name | varchar(128) | not null |
| description | text | not null |
| price | money | not null |
| checkIn | integer | not null |
| checkOut | integer | not null |
| minStay | integer | not null (number of nights) |
| bookingPeriod | integer | not null (number of months) |
| maxGuests | integer | not null |
| shelterIsProvided | boolean | not null |
| shelterTypeId | integer | not null, foreign key; references `ShelterTypes` |
| cancellationPolicyId | integer | not null, foreign key; references `CancellationPolicies` |
| arrivalTypeId | integer | not null, foreign key; references `ArrivalTypes` |
| accessTypeId | integer | not null, foreign key; references `AccessTypes` |
| hostId | integer | not null, foreign key; references `Users` |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `SpotAmenities`
Translation table between `Spots` and `Amenities`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| spotId | integer | not null, foreign key; references `Spots` |
| amenityId | integer | not null, foreign key; references `Amenities` |
| available | boolean | not null |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `Photos`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| url | varchar(256) | not null |
| spotId | integer | not null, foreign key; references `Spots` |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>

## `Bookings`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| startDate | date | not null |
| endDate | date | not null |
| spotId | integer | not null, foreign key; references `Spots` |
| userId | integer | not null, foreign key; references `Users` |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>


## `Reviews`
| column name | data type | details |
| :- | :- | :- |
| id | integer | not null, primary key |
| text | text | not null |
| recommended | boolean | not null |
| spotId | integer | not null, foreign key; references `Spots` |
| userId | integer | not null, foreign key; references `Users` |
| createdAt | timestamptz | not null |
| updatedAt | timestamptz | not null |
<br>
