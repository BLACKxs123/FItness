// Mock backend using localStorage

const USERS_KEY = 'fitnessTracker_users';
const WORKOUTS_KEY = 'fitnessTracker_workouts';
const GROUPS_KEY = 'fitnessTracker_groups';
const GOALS_KEY = 'fitnessTracker_goals';

// Helper function to get data from localStorage
const getData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Helper function to save data to localStorage
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// User functions
export const registerUser = (name, email, password) => {
  const users = getData(USERS_KEY);
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  saveData(USERS_KEY, users);
  return newUser;
};

export const loginUser = (email, password) => {
  const users = getData(USERS_KEY);
  return users.find(user => user.email === email && user.password === password);
};

// Workout functions
export const addWorkout = (userId, type, duration, calories, date) => {
  const workouts = getData(WORKOUTS_KEY);
  const newWorkout = { id: Date.now(), userId, type, duration, calories, date };
  workouts.push(newWorkout);
  saveData(WORKOUTS_KEY, workouts);
  return newWorkout;
};

export const getUserWorkouts = (userId) => {
  const workouts = getData(WORKOUTS_KEY);
  return workouts.filter(workout => workout.userId === userId);
};
// Group functions
export const createGroup = (name, description) => {
	const groups = getData(GROUPS_KEY);
	const newGroup = { id: Date.now(), name, description, members: 0 };
	groups.push(newGroup);
	saveData(GROUPS_KEY, groups);
	return newGroup;
  };
  
  export const getAllGroups = () => {
	return getData(GROUPS_KEY);
  };
  
  export const joinGroup = (userId, groupId) => {
	const memberships = getData(GOALS_KEY);
	const newMembership = { id: Date.now(), userId, groupId };
	memberships.push(newMembership);
	saveData(GOALS_KEY, memberships);
  
	const groups = getData(GROUPS_KEY);
	const updatedGroups = groups.map(group => {
	  if (group.id === groupId) {
		return { ...group, members: group.members + 1 };
	  }
	  return group;
	});
	saveData(GROUPS_KEY, updatedGroups);
  
	return newMembership;
  };
  
  export const getUserGroups = (userId) => {
	const memberships = getData(GOALS_KEY);
	const groups = getData(GROUPS_KEY);
	const userMemberships = memberships.filter(membership => membership.userId === userId);
	return userMemberships.map(membership => groups.find(group => group.id === membership.groupId));
  };
  
  // Goal functions
  export const addGoal = (userId, description, target, frequency) => {
	const goals = getData(GOALS_KEY);
	const newGoal = { id: Date.now(), userId, description, target, frequency, completed: false };
	goals.push(newGoal);
	saveData(GOALS_KEY, goals);
	return newGoal;
  };
  
  export const getUserGoals = (userId) => {
	const goals = getData(GOALS_KEY);
	return goals.filter(goal => goal.userId === userId);
  };
  
  export const completeGoal = (goalId) => {
	const goals = getData(GOALS_KEY);
	const updatedGoals = goals.map(goal => {
	  if (goal.id === goalId) {
		return { ...goal, completed: true };
	  }
	  return goal;
	});
	saveData(GOALS_KEY, updatedGoals);
	return updatedGoals.find(goal => goal.id === goalId);
  };