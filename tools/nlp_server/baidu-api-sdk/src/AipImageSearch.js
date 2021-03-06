'use strict';
/**
 * Copyright (c) 2017 Baidu.com, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @file AipImageSearch.js
 * @author baidu aip
 */

const BaseClient = require('./client/baseClient');

const RequestInfo = require('./client/requestInfo');

const HttpClient = require('./http/httpClient');

const objectTools = require('./util/objectTools');

const METHOD_POST = 'POST';

const SAME_HQ_ADD_PATH = '/rest/2.0/realtime_search/same_hq/add';
const SAME_HQ_SEARCH_PATH = '/rest/2.0/realtime_search/same_hq/search';
const SAME_HQ_DELETE_PATH = '/rest/2.0/realtime_search/same_hq/delete';
const SIMILAR_ADD_PATH = '/rest/2.0/image-classify/v1/realtime_search/similar/add';
const SIMILAR_SEARCH_PATH = '/rest/2.0/image-classify/v1/realtime_search/similar/search';
const SIMILAR_DELETE_PATH = '/rest/2.0/image-classify/v1/realtime_search/similar/delete';
const PRODUCT_ADD_PATH = '/rest/2.0/image-classify/v1/realtime_search/product/add';
const PRODUCT_SEARCH_PATH = '/rest/2.0/image-classify/v1/realtime_search/product/search';
const PRODUCT_DELETE_PATH = '/rest/2.0/image-classify/v1/realtime_search/product/delete';


/**
 * AipImageSearchç±»
 *
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
class AipImageSearch extends BaseClient {
    constructor(appId, ak, sk) {
        super(appId, ak, sk);
    }
    commonImpl(param) {
        let httpClient = new HttpClient();
        let apiUrl = param.targetPath;
        delete param.targetPath;
        let requestInfo = new RequestInfo(apiUrl,
            param, METHOD_POST);
        return this.doRequest(requestInfo, httpClient);
    }

    /**
     * ç¸åå¾æ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqAdd(image, options) {
        let param = {
            image: image,
            targetPath: SAME_HQ_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqSearch(image, options) {
        let param = {
            image: image,
            targetPath: SAME_HQ_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqDeleteByImage(image, options) {
        let param = {
            image: image,
            targetPath: SAME_HQ_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} contSign - å¾çç­¾åï¼åimageäºéä¸ï¼imageä¼åçº§æ´é«ï¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqDeleteBySign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: SAME_HQ_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarAdd(image, options) {
        let param = {
            image: image,
            targetPath: SIMILAR_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarSearch(image, options) {
        let param = {
            image: image,
            targetPath: SIMILAR_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarDeleteByImage(image, options) {
        let param = {
            image: image,
            targetPath: SIMILAR_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} contSign - å¾çç­¾åï¼åimageäºéä¸ï¼imageä¼åçº§æ´é«ï¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarDeleteBySign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: SIMILAR_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã**è¯·æ³¨æï¼æ£ç´¢æ¥å£ä¸è¿ååå¾ï¼ä»åé¦å½åå¡«åçbriefä¿¡æ¯ï¼æä»¥è°ç¨è¯¥å¥åºæ¥å£æ¶ï¼briefä¿¡æ¯è¯·å°½éå¡«åå¯å³èè³æ¬å°å¾åºçå¾çidæèå¾çurlãå¾çåç§°ç­ä¿¡æ¯**
     *   class_id1 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   class_id2 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productAdd(image, options) {
        let param = {
            image: image,
            targetPath: PRODUCT_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   class_id1 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   class_id2 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productSearch(image, options) {
        let param = {
            image: image,
            targetPath: PRODUCT_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âå é¤æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productDeleteByImage(image, options) {
        let param = {
            image: image,
            targetPath: PRODUCT_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âå é¤æ¥å£
     *
     * @param {string} contSign - å¾çç­¾åï¼åimageäºéä¸ï¼imageä¼åçº§æ´é«ï¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productDeleteBySign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: PRODUCT_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }
}

module.exports = AipImageSearch;

