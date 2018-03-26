import axios from 'axios';

const token = localStorage.getItem('access-token');
const client = localStorage.getItem('client');
const uid = localStorage.getItem('uid');

// const baseUrl = 'http://localhost:3001/api/v1/';
const baseUrl = 'https://baseballcloud-backend.herokuapp.com/api/v1/';

export default class Api {
  static validateToken = () => {
    const url = `${baseUrl}auth/validate_token`;
    return axios({
      method: 'get',
      url,
      headers: {
        'access-token': token,
        client,
        uid,
      },
    });
  };

  static registration = (credentials) => {
    const url = `${baseUrl}auth`;
    return axios.post(url, credentials);
  };

  static login = (credentials) => {
    const url = `${baseUrl}auth/sign_in`;
    return axios({
      method: 'post',
      url,
      data: credentials,
    });
  };

  static logout = (params) => {
    const url = `${baseUrl}auth/sign_out`;
    const body = {
      'access-token': params.token,
      uid: params.uid,
      client: params.client,
    };
    return axios.delete(url, {
      headers: body,
    });
  };

  static compareUsers = (name) => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      query: `query search_user($query:String!) {
                search_user (query:$query) {
                  id
                  first_name
                  last_name
                  height
                  weight
                  top_pitching_values
                  top_batting_values
                }
              }`,
      variables: {
        query: name,
      },
    });
  };

  static compareTcUsers = (name) => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      query: `query search_user($query:String!) {
                search_user (query:$query) {
                  id
                  first_name
                  last_name
                  height
                  weight
                  top_pitching_values
                  top_batting_values
                }
              }`,
      variables: {
        query: name,
      },
    });
  };

  static contactAdmin = (credentials) => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      // query: 'query search_user($query:String!) {search_user (query:$query) {first_name last_name age height weight} }',
      // variables: {
      //   query: name,
      // },
      credentials,
    });
  };

  static fetchCurrentProfile = () => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      query: `{ current_profile () {
                                    id
                                    first_name
                                    last_name
                                    position
                                    avatar
                                    throws_hand
                                    bats_hand
                                    biography
                                    school
                                    school_year
                                    summer_team
                                    feet
                                    inches
                                    weight
                                    age
                                    }
              }`,
    });
  };

  static sendProfileData = (form) => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      query: `mutation UpdateProfile($form:UpdateProfileInput!)
                  { update_profile (input:$form)
                       { profile {  first_name
                                    id
                                    last_name
                                    position
                                    avatar
                                    throws_hand
                                    bats_hand
                                    biography
                                    school
                                    school_year
                                    summer_team
                                    feet
                                    inches
                                    weight
                                    age
                                    events {
                                      id
                                      event_type
                                      event_name
                                    }
                                    recent_events {
                                      id
                                      event_type
                                      event_name
                                      date
                                      recent_avatars {
                                        id
                                        first_name
                                        last_name
                                        avatar
                                      }
                                    }
                                 }
                       }
                  }`,
      variables: {
        form,
      },
      headers: {
        'access-token': token,
        client,
        uid,
      },
    });
  };

  static sendFileToS3 = (url, file) => {
    return axios.put(url, file);
  };

  static sendFileName = (name) => {
    const url = `${baseUrl}s3/signed_url`;
    return axios.post(url, {
      name,
    });
  };

  static fetchProfiles = (filters = {}, profilesCount = 10, offset = 0) => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      query: `query Profiles($input:FilterProfilesInput!)
                  { profiles(input: $input)
                      { profiles {
                          id
                          first_name
                          last_name 
                          position
                          school 
                          school_year
                          summer_team
                          feet
                          inches
                          weight 
                          age
                        }
                        total_count
                      }
                  }`,
      variables: { input: { ...filters, profiles_count: profilesCount, offset } },
    });
  };

  static fetchLeaderboardBatting = (filters = { type: 'exit_velocity' }) => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      query: `query LeaderboardBatting($input:FilterLeaderboardInput!)
                  { leaderboard_batting(input: $input)
                      { leaderboard_batting { 
                          batter_name
                          exit_velocity
                          launch_angle
                          distance
                          batter_datraks_id
                        }
                      }
                  }`,
      variables: { input: { ...filters } },
    }).then((resp) => resp.data.data.leaderboard_batting);
  };

  static fetchLeaderboardPitching = (filters = { type: 'pitch_velocity' }) => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      query: `query LeaderboardPitching($input:FilterLeaderboardInput!)
                  { leaderboard_pitching(input: $input)
                      { leaderboard_pitching 
                        {  
                          pitcher_name
                          pitch_type
                          velocity
                          spin_rate
                          vertical_break
                          horizontal_break
                          pitcher_datraks_id
                        }
                      }
                  }`,
      variables: { input: { ...filters } },
    }).then((resp) => resp.data.data.leaderboard_pitching);
  };

  static fetchMyTeam = (filters = {}) => {
    const url = `${baseUrl}graphql`;
    return axios.post(url, {
      query: `query MyTeam($input:FilterTeamInput!)
                  { my_team(input: $input)
                      { team_profiles { 
                          id
                          first_name
                          last_name
                          school
                          age
                        }
                        total_count
                      }
                  }`,
      variables: { input: { player_name: filters.playerName } },
      headers: {
        'access-token': token,
        client,
        uid,
      },
    }).then((resp) => resp.data.data.my_team);
  };

  static fetchProfile = (userId) => axios.post(
    `${baseUrl}graphql`, {
      query: `query Profile($id:String!) { profile(id: $id) {
                                                          id
                                                          first_name
                                                          last_name 
                                                          position
                                                          school 
                                                          school_year
                                                          summer_team
                                                          avatar
                                                          throws_hand
                                                          bats_hand
                                                          biography
                                                          feet
                                                          inches
                                                          weight 
                                                          age
                                                          recent_events {
                                                            id
                                                            event_type
                                                            event_name
                                                            date
                                                            recent_avatars {
                                                              id
                                                              first_name
                                                              last_name
                                                              avatar
                                                            }
                                                          }
                                                          winsgspan
                                                          grip_right
                                                          grip_left
                                                          wrist_to_elbow
                                                          broad_jump
                                                          grip_left
                                                          act_score
                                                          gpa_score
                                                          sat_score
                                                          batting_top_values {
                                                            pitch_type
                                                            distance
                                                            launch_angle
                                                            exit_velocity
                                                          }
                                                          pitching_top_values {
                                                            velocity
                                                            spin_rate
                                                            pitch_type
                                                          }
                                                          pitcher_summary {
                                                            velocity
                                                            spin_rate
                                                            horizontal_break
                                                          }
                                                          batter_summary {
                                                            exit_velocity
                                                            distance
                                                            launch_angle
                                                          }
                                                        }
                                      }`,
      variables: { id: userId.toString() },
    });

  static fetchTcProfile = (id) => axios.post(
    `${baseUrl}graphql`, {
      query: `query TcProfile($id:String!) { tc_profile(id: $id) {
                                                          id
                                                          first_name
                                                          last_name 
                                                          position
                                                          school 
                                                          school_year
                                                          summer_team
                                                          avatar
                                                          throws_hand
                                                          bats_hand
                                                          biography
                                                          feet
                                                          inches
                                                          weight 
                                                          age
                                                          recent_events {
                                                            id
                                                            event_type
                                                            event_name
                                                            date
                                                            recent_avatars {
                                                              id
                                                              first_name
                                                              last_name
                                                              avatar
                                                            }
                                                          }
                                                          winsgspan
                                                          grip_right
                                                          grip_left
                                                          wrist_to_elbow
                                                          broad_jump
                                                          grip_left
                                                          act_score
                                                          gpa_score
                                                          sat_score
                                                          batting_top_values {
                                                            pitch_type
                                                            distance
                                                            launch_angle
                                                            exit_velocity
                                                          }
                                                          pitching_top_values {
                                                            velocity
                                                            spin_rate
                                                            pitch_type
                                                          }
                                                          pitcher_summary {
                                                            velocity
                                                            spin_rate
                                                            horizontal_break
                                                          }
                                                          batter_summary {
                                                            exit_velocity
                                                            distance
                                                            launch_angle
                                                          }
                                                        }
                                      }`,
      variables: { id: id.toString() },
    });


  static fetchPitchingLog = (profile_id = 1, filters = {}, count = 10, offset = 0) => axios.post(
    `${baseUrl}graphql`, {
      query: `query PitchingLog($input:FilterPitchingLogInput!) 
                { pitching_log(input: $input) {
                    pitching_log {
                      date
                      pitch_type
                      pitch_call
                      velocity
                      spin_rate
                      spin_axis
                      tilt
                      release_height
                      release_side
                      extension
                      vertical_break
                      horizontal_break
                      height_at_plate
                      batter_name
                      batter_datraks_id
                      batter_handedness
                    }
                    total_count
                  }
                }`,
      variables: { input: { profile_id, ...filters, count, offset } },
    });

  static fetchTcPitchingLog = (profile_id = 1, filters = {}, count = 10, offset = 0) => axios.post(
    `${baseUrl}graphql`, {
      query: `query PitchingLog($input:FilterPitchingLogInput!) 
                { pitching_log(input: $input) {
                    pitching_log {
                      date
                      pitch_type
                      pitch_call
                      velocity
                      spin_rate
                      spin_axis
                      tilt
                      release_height
                      release_side
                      extension
                      vertical_break
                      horizontal_break
                      height_at_plate
                      batter_name
                      batter_datraks_id
                      batter_handedness
                    }
                    total_count
                  }
                }`,
      variables: { input: { profile_id, ...filters, count, offset } },
    });

  static fetchBattingLog = (profile_id = 1, filters = {}, count = 10, offset = 0) => axios.post(
    `${baseUrl}graphql`, {
      query: `query BattingLog($input:FilterBattingLogInput!) 
                { batting_log(input: $input) {
                    batting_log {
                      date
                      pitcher_name
                      pitcher_handedness
                      pitch_type
                      pitch_call
                      exit_velocity
                      launch_angle
                      direction
                      hit_spin_rate
                      hang_time
                      pitcher_datraks_id
                    }
                    total_count
                  }
                }`,
      variables: { input: { profile_id, ...filters, count, offset } },
    });

  static fetchTcBattingLog = (profile_id = 1, filters = {}, count = 10, offset = 0) => axios.post(
    `${baseUrl}graphql`, {
      query: `query BattingLog($input:FilterBattingLogInput!) 
                { batting_log(input: $input) {
                    batting_log {
                      date
                      pitcher_name
                      pitcher_handedness
                      pitch_type
                      pitch_call
                      exit_velocity
                      launch_angle
                      direction
                      hit_spin_rate
                      hang_time
                      pitcher_datraks_id
                    }
                    total_count
                  }
                }`,
      variables: { input: { profile_id, ...filters, count, offset } },
    });

  static fetchEvents = (profile_id = 1, filters = {}, count = 10, offset = 0) => axios.post(
    `${baseUrl}graphql`, {
      query: `query Events($input:FilterEventsInput!)
                { events(input: $input) {
                    events {
                      id
                      date
                      event_type
                      event_name
                    }
                    total_count
                  }
                }`,
      variables: { input: { profile_id, ...filters, count, offset } },
    });

  static fetchTcEvents = (profile_id = 1, filters = {}, count = 10, offset = 0) => axios.post(
    `${baseUrl}graphql`, {
      query: `query Events($input:FilterEventsInput!)
                { events(input: $input) {
                    events {
                      id
                      date
                      event_type
                      event_name
                    }
                    total_count
                  }
                }`,
      variables: { input: { profile_id, ...filters, count, offset } },
    });

  static fetchProileNames = (playerName = '', position) => axios.post(
    `${baseUrl}graphql`, {
      query: `query ProfileNames($input:FilterProfileNamesInput!) 
                { profile_names(input: $input) {
                    profile_names {
                      id
                      position
                      first_name
                      last_name
                      inches
                      feet
                      weight
                      age
                    }
                  }
                }`,
      variables: { input: { player_name: playerName, position } },
    });

  static fetchTcProileNames = (playerName = '', position) => axios.post(
    `${baseUrl}graphql`, {
      query: `query ProfileNames($input:FilterProfileNamesInput!) 
                { profile_names(input: $input) {
                    profile_names {
                      id
                      position
                      first_name
                      last_name
                      inches
                      feet
                      weight
                      age
                    }
                  }
                }`,
      variables: { input: { player_name: playerName, position } },
    });

  static fetchBattingSummary = (profileId) =>
    axios.post(`${baseUrl}graphql`, {
      query: `query BattingSummary($id:ID!) { batting_summary(id: $id) {
          top_values {
            id
            distance
            pitch_type
            launch_angle
            exit_velocity
          }
          average_values{
            id
            distance
            pitch_type
            launch_angle
            exit_velocity
          }
        }
      }`,
      variables: { id: profileId },
    });

  static fetchTcBattingSummary = (profileId) =>
    axios.post(`${baseUrl}graphql`, {
      query: `query BattingSummary($id:ID!) { batting_summary(id: $id) {
          top_values {
            id
            distance
            pitch_type
            launch_angle
            exit_velocity
          }
          average_values{
            id
            distance
            pitch_type
            launch_angle
            exit_velocity
          }
        }
      }`,
      variables: { id: profileId },
    });

  static fetchPitchingSummary = (profileId) =>
    axios.post(`${baseUrl}graphql`, {
      query: `query PitchingSummary($id:ID!) { pitching_summary(id: $id) {
          top_values {
            id
            velocity
            spin_rate
            pitch_type
          }
          average_values{
            id
            velocity
            spin_rate
            pitch_type
          }
        }
      }`,
      variables: { id: profileId },
    });

  static fetchTcPitchingSummary = (profileId) =>
    axios.post(`${baseUrl}graphql`, {
      query: `query PitchingSummary($id:ID!) { pitching_summary(id: $id) {
          top_values {
            id
            velocity
            spin_rate
            pitch_type
          }
          average_values{
            id
            velocity
            spin_rate
            pitch_type
          }
        }
      }`,
      variables: { id: profileId },
    });

  static fetchEventRows = (event_id = 1, filters = {}, count = 10, offset = 0) => axios.post(
    `${baseUrl}graphql`, {
      query: `query EventRows($input:FilterEventRowsInput!)
                { event_rows(input: $input) {
                    event_rows {
                      id
                      pitcher_name
                      pitcher_handedness
                      batter_name
                      pitch_type
                      pitch_call
                      velocity
                      spin_rate
                      release_side
                      extension
                      vertical_break
                      horizontal_break
                      height_at_plate
                      exit_velocity
                      launch_angle
                      direction
                      hit_spin_rate
                      distance
                      hang_time
                    }
                    event {
                      id
                      date
                      event_type
                      event_name
                    }
                    total_count
                  }
                }`,
      variables: { input: { event_id, ...filters, count, offset } },
    });

  static fetchTcEventRows = (event_id = 1, filters = {}, count = 10, offset = 0) => axios.post(
    `${baseUrl}graphql`, {
      query: `query EventRows($input:FilterEventRowsInput!)
                { event_rows(input: $input) {
                    event_rows {
                      id
                      pitcher_name
                      pitcher_handedness
                      batter_name
                      pitch_type
                      pitch_call
                      velocity
                      spin_rate
                      release_side
                      extension
                      vertical_break
                      horizontal_break
                      height_at_plate
                      exit_velocity
                      launch_angle
                      direction
                      hit_spin_rate
                      distance
                      hang_time
                    }
                    event {
                      id
                      date
                      event_type
                      event_name
                    }
                    total_count
                  }
                }`,
      variables: { input: { event_id, ...filters, count, offset } },
    });

  static fetchSchema = () => axios.post(`${baseUrl}graphql`, {
    query: `query {
                    __schema {
                      types {
                        name
                        description
                        fields {
                          name
                        }
                      }
                    }
                  }`,
  });
}
