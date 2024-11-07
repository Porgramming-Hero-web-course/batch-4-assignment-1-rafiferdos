interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, updates: { name?: string; age?: number; email?: string }): Profile => {
    return { ...profile, ...updates };
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));