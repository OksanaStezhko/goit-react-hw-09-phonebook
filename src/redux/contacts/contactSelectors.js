import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filterString, allContacts) => {
    const normalizedContactName = filterString.toLowerCase();
    return allContacts.filter(item =>
      item.name.toLowerCase().includes(normalizedContactName),
    );
  },
);
