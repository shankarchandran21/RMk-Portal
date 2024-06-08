import React, { useEffect, useState } from 'react';
import { deleteUser, getUserById, updateUser } from '../services/UserApi';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import avatar from '../assets/images/man.png';
import not_found from '../assets/images/not_found.png';
import { act } from 'react-dom/test-utils';

const UserProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getUserById(id);
                act(() => {
                    if (res && res.data) {
                        setUser(res.data);
                    } else {
                        setUser({});
                    }
                });
            } catch (error) {
                console.log(error);
                act(() => {
                    setUser({});
                });
            }
        };

        fetchData();
    }, [id]);

    const handleChangeEvent = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
        updateUser(id, user)
            .then((res) => setUser(res.data))
            .catch((error) => console.log(error));
    };

    const handleDeleteClick = () => {
        deleteUser(id)
            .then(() => setUser({}))
            .catch((error) => console.log(error));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {Object.keys(user).length === 0 ? (
                <React.Fragment>
                    <img src={not_found} alt="User not found" width={500} height={500} />
                    <Button size="small" style={{ backgroundColor: '#1d1d1d', color: '#f1f1f1' }} onClick={() => navigate(`/`)}>Back</Button>
                </React.Fragment>
            ) : (
                <Card sx={{ width: 345 }} elevation={24}>
                    <Typography variant="body2" color="text.secondary">
                        User Profile
                    </Typography>
                    <CardActionArea>
                        <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar
                                alt={user.name}
                                src={avatar}
                                sx={{ width: 56, height: 56, mb: 2 }}
                            />
                            <Typography gutterBottom variant="h5" component="div">
                                {editMode ? (
                                    <input type="text" name="name" id="name" value={user.name} onChange={handleChangeEvent} />
                                ) : (
                                    user.name
                                )}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {editMode ? (
                                    <input type="text" name="email" id="email" value={user.email} onChange={handleChangeEvent} />
                                ) : (
                                    user.email
                                )}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {editMode ? (
                                    <input type="text" name="phone" id="phone" value={user.phone} style={{ marginTop: 10 }} onChange={handleChangeEvent} />
                                ) : (
                                    user.phone
                                )}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ width: '100%', justifyContent: 'center' }}>
                            {editMode ? (
                                <Button size="small" style={{ backgroundColor: 'aquamarine', color: '#1d1d1d' }} onClick={handleSaveClick}>
                                    Save
                                </Button>
                            ) : (
                                <Button size="small" style={{ backgroundColor: 'aquamarine', color: '#1d1d1d' }} onClick={handleEditClick}>
                                    Edit
                                </Button>
                            )}
                            <Button size="small" style={{ backgroundColor: 'crimson', color: '#f1f1f1' }} onClick={handleDeleteClick}>Delete Account</Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            )}
        </div>
    );
};

export default UserProfile;