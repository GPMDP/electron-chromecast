import EditTracksInfoRequest from './_Classes/EditTracksInfoRequest';
import GenericMediaMetadata from './_Classes/GenericMediaMetadata';
import GetStatusRequest from './_Classes/GetStatusRequest';
import LoadRequest from './_Classes/LoadRequest';
import Media from './_Classes/Media';
import MediaInfo from './_Classes/MediaInfo';
import MovieMediaMetadata from './_Classes/MovieMediaMetadata';
import MusicTrackMediaMetadata from './_Classes/MusicTrackMediaMetadata';
import PauseRequest from './_Classes/PauseRequest';
import PhotoMediaMetadata from './_Classes/PhotoMediaMetadata';
import PlayRequest from './_Classes/PlayRequest';
import QueueInsertItemsRequest from './_Classes/QueueInsertItemsRequest';
import QueueItem from './_Classes/QueueItem';
import QueueLoadRequest from './_Classes/QueueLoadRequest';
import QueueRemoveItemsRequest from './_Classes/QueueRemoveItemsRequest';
import QueueReorderItemsRequest from './_Classes/QueueReorderItemsRequest';
import QueueSetPropertiesRequest from './_Classes/QueueSetPropertiesRequest';
import QueueUpdateItemsRequest from './_Classes/QueueUpdateItemsRequest';
import SeekRequest from './_Classes/SeekRequest';
import StopRequest from './_Classes/StopRequest';
import TextTrackStyle from './_Classes/TextTrackStyle';
import Track from './_Classes/Track';
import TvShowMediaMetadata from './_Classes/TvShowMediaMetadata';
import VolumeRequest from './_Classes/VolumeRequest';

import Timeout from './timeout';

export default class MediaStatic {
  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.IdleReason
  static IdleReason = {
    CANCELLED: 'CANCELLED',
    INTERRUPTED: 'INTERRUPTED',
    FINISHED: 'FINISHED',
    ERROR: 'ERROR',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.MediaCommand
  static MediaCommand = {
    PAUSE: 'PAUSE',
    SEEK: 'SEEK',
    STREAM_VOLUME: 'STREAM_VOLUME',
    STREAM_MUTE: 'STREAM_MUTE',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.MetadataType
  static MetadataType = {
    GENERIC: 'GENERIC',
    MOVIE: 'MOVIE',
    TV_SHOW: 'TV_SHOW',
    MUSIC_TRACK: 'MUSIC_TRACK',
    PHOTO: 'PHOTO',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.PlayerState
  static PlayerState = {
    IDLE: 'IDLE',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    BUFFERING: 'BUFFERING',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.RepeatMode
  static RepeatMode = {
    OFF: 'OFF',
    ALL: 'ALL',
    SINGLE: 'SINGLE',
    ALL_AND_SHUFFLE: 'ALL_AND_SHUFFLE',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.ResumeState
  static ResumeState = {
    PLAYBACK_START: 'PLAYBACK_START',
    PLAYBACK_PAUSE: 'PLAYBACK_PAUSE',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.StreamType
  static StreamType = {
    BUFFERED: 'BUFFERED',
    LIVE: 'LIVE',
    OTHER: 'OTHER',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.TextTrackEdgeType
  static TextTrackEdgeType = {
    NONE: 'NONE',
    OUTLINE: 'OUTLINE',
    DROP_SHADOW: 'DROP_SHADOW',
    RAISED: 'RAISED',
    DEPRESSED: 'DEPRESSED',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.TextTrackFontGenericFamily
  static TextTrackFontGenericFamily = {
    SANS_SERIF: 'SANS_SERIF',
    MONOSPACED_SANS_SERIF: 'MONOSPACED_SANS_SERIF',
    SERIF: 'SERIF',
    MONOSPACED_SERIF: 'MONOSPACED_SERIF',
    CASUAL: 'CASUAL',
    CURSIVE: 'CURSIVE',
    SMALL_CAPITALS: 'SMALL_CAPITALS',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.TextTrackFontStyle
  static TextTrackFontStyle = {
    NORMAL: 'NORMAL',
    BOLD: 'BOLD',
    BOLD_ITALIC: 'BOLD_ITALIC',
    ITALIC: 'ITALIC',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.TextTrackType
  static TextTrackType = {
    SUBTITLES: 'SUBTITLES',
    CAPTIONS: 'CAPTIONS',
    DESCRIPTIONS: 'DESCRIPTIONS',
    CHAPTERS: 'CHAPTERS',
    METADATA: 'METADATA',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.TextTrackWindowType
  static TextTrackWindowType = {
    NONE: 'NONE',
    NORMAL: 'NORMAL',
    ROUNDED_CORNERS: 'ROUNDED_CORNERS',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.TrackType
  static TrackType = {
    TEXT: 'TEXT',
    AUDIO: 'AUDIO',
    VIDEO: 'VIDEO',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.DEFAULT_MEDIA_RECEIVER_APP_ID
  // DEV: As per https://github.com/thibauts/node-castv2#controlling-applications
  static DEFAULT_MEDIA_RECEIVER_APP_ID = 'CC1AD845';
}

MediaStatic.EditTracksInfoRequest = EditTracksInfoRequest;
MediaStatic.GenericMediaMetadata = GenericMediaMetadata;
MediaStatic.GetStatusRequest = GetStatusRequest;
MediaStatic.LoadRequest = LoadRequest;
MediaStatic.Media = Media;
MediaStatic.MediaInfo = MediaInfo;
MediaStatic.MovieMediaMetadata = MovieMediaMetadata;
MediaStatic.MusicTrackMediaMetadata = MusicTrackMediaMetadata;
MediaStatic.PauseRequest = PauseRequest;
MediaStatic.PhotoMediaMetadata = PhotoMediaMetadata;
MediaStatic.PlayRequest = PlayRequest;
MediaStatic.QueueInsertItemsRequest = QueueInsertItemsRequest;
MediaStatic.QueueItem = QueueItem;
MediaStatic.QueueLoadRequest = QueueLoadRequest;
MediaStatic.QueueRemoveItemsRequest = QueueRemoveItemsRequest;
MediaStatic.QueueReorderItemsRequest = QueueReorderItemsRequest;
MediaStatic.QueueSetPropertiesRequest = QueueSetPropertiesRequest;
MediaStatic.QueueUpdateItemsRequest = QueueUpdateItemsRequest;
MediaStatic.SeekRequest = SeekRequest;
MediaStatic.StopRequest = StopRequest;
MediaStatic.TextTrackStyle = TextTrackStyle;
MediaStatic.Track = Track;
MediaStatic.TvShowMediaMetadata = TvShowMediaMetadata;
MediaStatic.VolumeRequest = VolumeRequest;

MediaStatic.timeout = Timeout;
