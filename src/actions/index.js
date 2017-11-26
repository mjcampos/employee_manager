const EMAIL_CHANGED = 'EMAIL_CHANGED';

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		text
	}
}