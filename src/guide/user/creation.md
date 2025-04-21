---
title: Creating a VetoAPI User
---

# Creating a User

Creating a user in VetoAPI is a two-step process: initiating registration and then completing it. This approach provides security and flexibility for your application.

## Registration Flow

1. Start the registration process with [`registerStart`](#registration-start)
2. Complete the registration with [`registerComplete`](#registration-complete)

## Registration Start

To begin the registration process:

```ts
import { VetoAPI } from 'vetoapi-client-lib'

const vetoapi = new VetoAPI()
const startResponse = await vetoapi.registerStart()
```

This initiates the registration and returns a response containing information needed for the next step.

::: info
The `registerStart` method accepts an optional configuration object if you need to customize the registration process.
:::

## Registration Complete

After starting the registration process, you need to complete it:

```ts
const completeResponse = await vetoapi.registerComplete({
  registrationId: startResponse.registrationId,
  email: 'user@example.com',
  password: 'securepassword',
  displayName: 'Username'
})

// The client automatically stores the authentication token
console.log('User created successfully:', completeResponse.userId)
```

The `registerComplete` method requires the registration information and returns the new user data along with an authentication token. The VetoAPI client automatically stores this token for subsequent API calls.

## Getting User Information

After registration, you can fetch the user's profile information:

```ts
// Get information about the current authenticated user
const userInfo = await vetoapi.getUserInfo()
console.log(`Logged in as: ${userInfo.displayName}`)
```

## User Management

VetoAPI provides additional methods for user management:

- Update a user's profile with `updateUserProfile`
- Delete a user account with `deleteUser`

```ts
// Update user profile
await vetoapi.updateUserProfile(userId, {
  displayName: 'New Username'
})

// Delete user account (use with caution)
await vetoapi.deleteUser(userId)
